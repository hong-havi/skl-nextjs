import Image from "next/image"; 
import styles from './gnb.module.scss';
import Link from "next/link";

export default function Gnb() {
    return (
		<header id={ styles.header }>
			<div className={ styles.container }>
				<h1 className={ styles.logo }>
				</h1>

                <ul className={ styles.util_menu }>
                    <li><Link href="/login">로그인</Link></li>
                    <li className={ styles.join }><Link href="/join" className={ styles.bar }>회원가입</Link></li>
                </ul>
			</div>
		</header>
    );
}
  