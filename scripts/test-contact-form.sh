#!/bin/bash
# ═══════════════════════════════════════════════════════════════
# Contact Form E2E Test
# 测试 Web3Forms + Cloudflare Email Routing 是否正常工作
# ═══════════════════════════════════════════════════════════════

set -e

# ─── 颜色 ───
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# ─── 配置 ───
WEB3FORMS_KEY="e9b29e3d-a8ad-45e6-9f75-44a84ee2c156"
WEB3FORMS_URL="https://api.web3forms.com/submit"
FROM_EMAIL="info@toei-sosan.com"
TO_EMAIL="462387747@qq.com"
TEST_SUBJECT="[TEST] $(date +%Y-%m-%d\ %H:%M:%S) フォーム送信テスト"
TEST_NAME="Mavis Test Bot"
TEST_MESSAGE="これは自動テスト送信です。受信できていれば、Web3Forms + Cloudflare Email Routing 全体が正常に動作しています。"

echo -e "${YELLOW}🚀 Contact Form E2E Test${NC}"
echo -e "${YELLOW}=========================${NC}"
echo ""
echo "From: ${FROM_EMAIL} (via Web3Forms)"
echo "To:   ${TO_EMAIL} (via CF Email Routing)"
echo "Subject: ${TEST_SUBJECT}"
echo ""

# ─── Step 1: Web3Forms 送信 ───
echo -e "${YELLOW}▶ Step 1: Web3Forms API 送信中...${NC}"
RESPONSE=$(curl -sS -X POST "$WEB3FORMS_URL" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d "{
    \"access_key\": \"${WEB3FORMS_KEY}\",
    \"subject\": \"${TEST_SUBJECT}\",
    \"from_name\": \"${TEST_NAME}\",
    \"email\": \"test@toei-sosan.com\",
    \"message\": \"${TEST_MESSAGE}\"
  }" 2>&1)

echo "Response: ${RESPONSE}"
echo ""

# ─── Step 2: 結果判定 ───
if echo "$RESPONSE" | grep -q '"success":true'; then
  echo -e "${GREEN}✅ Step 1 OK: Web3Forms 受理成功${NC}"
elif echo "$RESPONSE" | grep -q '"success": false'; then
  echo -e "${RED}❌ Step 1 FAIL: Web3Forms 拒否${NC}"
  echo "詳細: $RESPONSE"
  exit 1
else
  echo -e "${YELLOW}⚠️  Step 1 判定不能（レスポンス確認）${NC}"
fi
echo ""

# ─── Step 3: メール到達チェック案内 ───
echo -e "${YELLOW}▶ Step 2: メール到達確認${NC}"
echo "  1〜3 分以内に ${TO_EMAIL} へ ${TEST_SUBJECT} のメールが届くはず"
echo ""
echo "届かない場合の確認ポイント:"
echo "  • Web3Forms dashboard (https://web3forms.com/dashboard) で submissions 確認"
echo "  • Cloudflare Dashboard → toei-sosan.com → Email → Email Routing → Routes"
echo "  • ${FROM_EMAIL} への Cloudflare メール受信が enabled か確認"
echo "  • Cloudflare Email Routing の MX レコード (Route 53 / Cloudflare DNS) 確認:"
echo "      toei-sosan.com  MX  route1.cloudflare.email  10"
echo "      toei-sosan.com  MX  route2.cloudflare.email  20"
echo "      toei-sosan.com  MX  route3.cloudflare.email  30"
echo ""
echo "  • スパムフォルダ確認"
echo "  • ${TO_EMAIL} のメールボックス容量確認"
echo ""

# ─── DNS チェック ───
echo -e "${YELLOW}▶ Step 3: DNS レコード自動チェック${NC}"
DNS_RESULT=$(dig +short toei-sosan.com MX 2>/dev/null || nslookup -query=MX toei-sosan.com 2>/dev/null | grep "mail exchanger" || echo "DIG_FAILED")
if echo "$DNS_RESULT" | grep -qi "cloudflare"; then
  echo -e "${GREEN}✅ MX records point to Cloudflare:${NC}"
  echo "$DNS_RESULT"
else
  echo -e "${YELLOW}⚠️  MX records might not be Cloudflare:${NC}"
  echo "$DNS_RESULT"
fi
echo ""

# ─── Email Routing 設定確認 ───
echo -e "${YELLOW}▶ Step 4: Email Routing ステータス${NC}"
TXT_RESULT=$(dig +short toei-sosan.com TXT 2>/dev/null | grep -i "v=spf" || echo "SPF_NOT_FOUND")
if echo "$TXT_RESULT" | grep -qi "cloudflare"; then
  echo -e "${GREEN}✅ SPF includes Cloudflare Email Routing${NC}"
  echo "$TXT_RESULT"
else
  echo -e "${YELLOW}⚠️  SPF record not set or not via Cloudflare${NC}"
  echo "$TXT_RESULT"
fi

echo ""
echo -e "${GREEN}✅ テスト送信完了${NC}"
echo "メールボックスを確認してください: ${TO_EMAIL}"
