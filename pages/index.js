import Layout from '../layouts/Layout';
import About from './about';
import Experience from './experience';
import Blogs from './blogs';
import Contact from './contact';
import Landing from './Landing';
import Footer from './footer';


export default function index() {

  return (
    <Layout title="Ustami Razib">
      <main className="py-28 sm:py-56 dark:bg-gray-700">
        {/* <!-- Landing pages --> */}
        <Landing />
        {/* <!-- About pages --> */}
        <About />
        {/* <!-- Experience pages --> */}
        <Experience />
        {/* <!-- Blogs pages --> */}
        <Blogs />
        {/* <!-- Contact pages --> */}
        <Contact />
      </main>
      <Footer />
    </Layout>
  )
}
