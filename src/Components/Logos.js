import { BracketsLogo } from "./BracketsLogo"
import { Logo } from "./Logo"
import "./Logos.css"

export const Logos  = () => {
    return(
        <div className="logos">
            <Logo>
                <BracketsLogo/>
            </Logo>
            <Logo />
            <Logo />
            <Logo />
            <Logo />
            <Logo />

        </div>
    )
}