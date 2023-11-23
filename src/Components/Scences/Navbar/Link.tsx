import { SelectedPage } from "@/Shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string,
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <div>
        <AnchorLink href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)} className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-500`}>
            {page}
        </AnchorLink>
    </div >
  )
}

export default Link