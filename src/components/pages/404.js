import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import '../../style/page_404.scss';

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p className="page_404">Page doesn't exist</p>
            <Link className="link_404" to='/'>Back to main page</Link>
        </div>
    );
}

export default Page404;