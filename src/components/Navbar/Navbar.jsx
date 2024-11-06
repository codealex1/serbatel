import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton,  } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import images from "../../constants/image";
import './Navbar.css'
import React, { useState } from 'react';

const navigation = [
  { name: 'Accueil', href: '/', current: true },
  { name: 'Projets', href: '#', current: false },
  { name: 'À propos', href: '/', current: false },
  { name: 'Contact',  href:'#target',current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Redirige vers la page LinkedIn
    window.location.href = 'https://www.linkedin.com/in/caroline-brunet-delbart/?originalSubdomain=fr';
  };
  return (
    
    <>
    <Disclosure as="nav" className="relative  flex flex-col justify-between" id='navbar'>
      <div class='navbar  items-center justify-center '>
              {/* Image centrée au-dessus de la navbar */}
          <div className="flex justify-center mb-4">
            <img src={images.biglogo} alt="Centrée" className="h-48 w-auto" id='imgHead' />
          </div>

          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 backimage">
            <div className="relative flex h-16 items-center justify-center"> {/* Justification centrée */}
              
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              
              <div >
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        class="itemnavbar"
                        className={classNames(
                          item.current ? ' text-white itemnavbar' : ' itemnavbar text-white hover:bg-gray-700 hover:text-white',
                          'rounded-md px-8 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <button onClick={handleClick} disabled={isClicked}>
                      {isClicked}
                      <span className="absolute " />
                      <img
                        
                        alt=""
                        src={images.linkedin}
                        className="h-8 w-8 rounded-full"
                      /></button>
                      
                    </MenuButton>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? ' text-white' : 'bg-black text-white hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
      </div >
      
    </Disclosure>
</>
  )
}
