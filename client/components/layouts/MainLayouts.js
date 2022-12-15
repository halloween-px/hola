import Footer from "./Footer";
import Header from "./Header";

const MainLayouts = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayouts;