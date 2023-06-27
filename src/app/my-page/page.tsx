/**
 * 마이페이지
 */
import Layout from '@/components/common/Layout'
import AccountSettingPage from './setting/page'

// type accountInfoProps = {
//   userId: number
// }

export default function MyPage() {
  return (
    <Layout>
      <AccountSettingPage />
    </Layout>
  )
}
