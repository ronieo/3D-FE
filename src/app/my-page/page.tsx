/**
 * 마이페이지
 */
import Layout from '@/components/common/Layout'
import AccountSettingPage from './setting/page'
// import OrderHistoryDetailPage from './orderHistory/[slug]/page'
// import OrderHistoryPage from './orderHistory/page'
import MyPageAll from '@/components/myPage/MyPageAll'

export default function MyPage() {
  return (
    <Layout>
      <AccountSettingPage />
      {/* <OrderHistoryPage /> */}
    </Layout>
  )
}
