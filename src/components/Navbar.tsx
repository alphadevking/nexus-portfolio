import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Modal,
  ModalContent,
  ModalBody,
  Link
} from "@nextui-org/react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function CustomNavbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar isBordered className="fixed top-0 left-0 w-full z-50 bg-purple-200/5 dark:bg-purple-900/5 backdrop-blur">
        <NavbarBrand>
          <HiOutlineBars3BottomLeft size={25} onClick={handleModalOpen} />
        </NavbarBrand>

        <NavbarContent justify="end">
          <div>
            <ThemeSwitcher />
          </div>
          <div className="lg:flex">
            <Dropdown placement="bottom-end" className="bg-inherit backdrop-blur-xl">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="primary"
                  name="Favour Orukpe"
                  size="sm"
                  src="/images/alpha.jpg"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="light" className="text-inherit">
                <DropdownItem href="" key="readme">Want to know me?</DropdownItem>
                {/* <DropdownItem key="ui_settings">UI Settings</DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
          </div>
        </NavbarContent>
      </Navbar>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        backdrop="blur"
        size="full"
        className="fixed inset-0 z-50 bg-purple-900/5 dark:bg-purple-900/5 text-foreground backdrop-blur"
      >
        <ModalContent className="flex items-center justify-center w-full h-full">
          <ModalBody className="flex flex-col items-center justify-center h-full gap-8 text-center">
            <h2 className="text-3xl underline-offset-8 font-semibold underline mb-2">Access My Socials</h2>
            <ul className="text-5xl uppercase space-y-8">
              <li><Link target="_blank" href="https://www.linkedin.com/in/favour-orukpe/">LinkedIn</Link></li>
              <li><Link target="_blank" href="https://github.com/alphadevking">Github</Link></li>
              <li><Link target="_blank" href="https://medium.com/@alphadevking">Medium</Link></li>
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
