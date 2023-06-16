import {FaGithubSquare, FaTwitterSquare, FaFacebookSquare} from 'react-icons/fa';

export default function Header(){
    return(
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Checkop 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="fs-3"><FaFacebookSquare/></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i className="fs-3"><FaTwitterSquare/></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i className="fs-3"><FaGithubSquare/></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )   
}