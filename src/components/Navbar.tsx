import { HStack, Image, Link } from "@chakra-ui/react";
import logo from '../assets/logo.png';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent='space-evenly' padding='10px'>
      <Link href="/">
        <Image src={logo} boxSize={['40px', '50px', '60px']} />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar;
