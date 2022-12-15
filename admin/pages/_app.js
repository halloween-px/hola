// import { MainProvider } from '../components/contexts/Main';
import 'antd/dist/antd.css';
import AdminLayout from '../components/layouts/Admin';
import '../scss/app.scss';
export default function App({ Component, pageProps }) {
  return (
    <AdminLayout >
      <Component {...pageProps} />
    </AdminLayout>
  )
}