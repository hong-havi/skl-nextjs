import Image from "next/image"; 
import styles from './gnb.module.scss';

export default function Gnb() {
    return (
		<header id={ styles.siwon_header }>
			<div className={ styles.container }>
				<h1 className={ styles.logo }>
					<a href="/">
						<Image 
                            src="https://siwon-cdn.siwonschool.com/member/comm/logo.png" 
                            className="pc" 
                            alt="siwonschool members" 
                            width={290}
                            height={30}
                            />
						{ /*<Image src="//siwon-cdn.siwonschool.com/member/m/comm/logo.png" className="mo" alt="siwonschool members" />*/}
					</a>
				</h1>

                <ul className={ styles.util_menu }>
                    <li><a href="/login">로그인</a></li>
                    <li className={ styles.join }><a href="/join" className={ styles.bar }>회원가입</a></li>
                    <li><a href="/?s=logout">로그아웃</a></li>
                    <li><a href="/?s=modify" className={ styles.bar }>내정보관리</a></li>
                </ul>
			</div>
		</header>
    );
}
  