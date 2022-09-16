import Link from "next/link";
import {
  IconButton,
  Flex,
  Box,
  UnorderedList,
  ListItem,
  Button,
  Text,
} from "@chakra-ui/react";
import classes from "./NavBar.module.css";
import { BsSearch } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import logo from "../assets/images/logo.png";
const menu = [
  { name: "Home", link: "/" },
  { name: "Buy Property", link: "/search?purpose=for-sale" },
  { name: "Rent Property", link: "/search?purpose=for-rent" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Search", link: "/search" },
];
const NavBar = () => {
  return (
    <>
      <div className={classes.nav_container}>
        <div className={classes.logo_container}>
          <Image width={50} height={50} src={logo} alt="logo" />
        </div>
        <div className={classes.menu_container}>
          <ul>
            {[
              { name: "Home", link: "/" },
              { name: "Buy Property", link: "/search?purpose=for-sale" },
              { name: "Rent Property", link: "/search?purpose=for-rent" },
              { name: "About", link: "/about" },
              { name: "Blog", link: "/blog" },
              { name: "Search", link: "/search" },
            ].map((menu) => (
              <li key={menu.name}>
                <Link href={menu.link} passHref>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.right_container}>
          <div className={classes.search}>
            <div>
              <Link href="./search" passHref>
                <IconButton aria-label="Search database" icon={<BsSearch />} />
              </Link>
            </div>
            <Flex>
              <Button colorScheme="red" size="md">
                Get started
              </Button>
            </Flex>
          </div>
          <div className={classes.hamburger}>
            <IconButton
              size="lg"
              aria-label="Search database"
              icon={<GrMenu />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
