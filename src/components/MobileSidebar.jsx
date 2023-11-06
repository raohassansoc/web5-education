"use client"
import * as React from "react";
import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link';
import Image from "next/image";
import signInWithDomainAndTokenId from "mango-domain-validate/sdk/domain-checker-sdk";
import img from "../../public/images/courses-banner.webp"
import { useAuth } from './../app/AuthContext';
import { fetchData, logIn } from '../../src/functions';

export default function MobileSidebar() {
  const auth = useAuth();
  const userDomain = new signInWithDomainAndTokenId();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [domainTitle, setDomainTitle] = useState('');
  const [domainId, setDomainId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  const [signupModalOpen, setSignUpmodalOpen] = useState(false);
  const [signUpStepTwo, setsignUpStepTwo] = useState(false);
  const [signUpStepThree, setsignUpStepThree] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogout = () => {
    auth.logout();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDomainTitle('');
    setErrorMessage('');
    setApiResponse(null);
  };

  const handleSubmitModal = async (e) => {
    e.preventDefault();

    const domainRegex = /^[a-zA-Z0-9.-]+\.mmit$/;
    if (!domainRegex.test(domainTitle)) {
      setErrorMessage('Invalid domain format');
      return;
    }

    setIsLoading(true)
    try {
      // const ftdata = await fetchData(domainTitle.toLowerCase(), domainId)
      // console.log(domainTitle.toLowerCase(), domainId)
      const ftdata = await userDomain.validateUser(domainTitle.toLowerCase(), domainId);
      console.log(ftdata.data)
      if (ftdata.data.success) {
        auth.login({ username: domainTitle.toLowerCase(), id: domainId });
        setApiResponse({ username: domainTitle.toLowerCase(), id: domainId });
        logIn(domainTitle.toLowerCase());
        handleCloseModal();
        setIsLoading(false);
      } else {
        setErrorMessage("Login Failed1");
        handleOpenModal();
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error)
      handleOpenModal();
      setIsLoading(false);
      setErrorMessage("Login Failed2");
    }

  };


  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    return newErrors;
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Form submitted successfully');
      setErrors({});
      setsignUpStepTwo(true);
    } else {
      setErrors(newErrors);
    }

  };


  //////////////////////olddata////////////////////////

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>


      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>

          <ListItem key={'Home'} disablePadding>
            <Link href={'/'}>
              <ListItemButton>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem key={'AI'} disablePadding>
            <ListItemButton>
              <ListItemText primary={'AI'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'Blockchain'} disablePadding>
            <ListItemButton>
              <ListItemText primary={'Blockchain'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'Defi'} disablePadding>
            <ListItemButton>
              <ListItemText primary={'Defi'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'Courses'} disablePadding>
            <Link href={'/courses'}>
              <ListItemButton>
                <ListItemText primary={'Courses'} />
              </ListItemButton>
            </Link>
          </ListItem>

        </List>
        <Divider />
        <List>
          {auth?.user === null || auth?.user === undefined || !auth?.user ?
            (<>
              <ListItem onClick={() => { setSignUpmodalOpen(true) }} key={'SignUp'} disablePadding>
                <ListItemButton>
                  <ListItemText primary={'SignUp'} />
                </ListItemButton>
              </ListItem>

              <ListItem onClick={handleOpenModal} key={'LogIn With MMIT'} disablePadding>
                <ListItemButton>
                  <ListItemText primary={'LogIn With MMIT'} />
                </ListItemButton>
              </ListItem>
            </>
            ) : (
              <>
                <ListItem key={auth?.user.username.toUpperCase() || auth?.user.email.toUpperCase()} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={auth?.user.username.toUpperCase() || auth?.user.email.toUpperCase()} />
                  </ListItemButton>
                </ListItem>

                <ListItem onClick={handleLogout} key={'Logout'} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={'Logout'} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
        </List>
      </Box >
      <style jsx>{`
       
       input {
         width: 100%;
         padding: 10px;
         margin-bottom: 10px;
         border: 1px solid #ccc;
         border-radius: 4px;
       }
       .error {
         color: red;
         margin-top: 5px;
       }

       .api-response {
         margin-top: 10px;
         border: 1px solid #ccc;
         padding: 10px;
         background-color: #f7f7f7;
       }
     `}</style>
    </>
  );

  return (
    <div>
      {signupModalOpen && (
        <div className="modal">
          {isLoading ?
            <div className="loader">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
              <div className="bar4" />
              <div className="bar5" />
              <div className="bar6" />
              <div className="bar7" />
              <div className="bar8" />
              <div className="bar9" />
              <div className="bar10" />
              <div className="bar11" />
              <div className="bar12" />
            </div>
            :
            <div className="modal-content">
              <button className="close-button button border border-[#972fed]
                   px-4 pt-2 pb-[6px]" onClick={() => { setSignUpmodalOpen(false); setsignUpStepTwo(false); setsignUpStepThree(false) }}>
                ×
              </button>
              {signUpStepTwo ?
                <>
                  {signUpStepThree ?
                    <div className="pt-5 pb-5 paymentScreen">
                      <h1>Scan QR Code to Pay</h1>
                      <div className="qrCodeContainer">
                        {/* Placeholder for QR code image */}
                        <Image src={img} alt="QR Code" width={200} height={200} />
                      </div>
                      <p className="instruction">Scan the QR code with your payment app to proceed.</p>
                    </div>
                    :
                    <div className="payment-form">
                      <h1 className="payment-header">Payment Required: $160</h1>
                      <p className="payment-description">To proceed, please complete the payment.</p>
                      <button
                        onClick={() => { setsignUpStepThree(true) }}
                        className="payment-button"
                        type="submit"
                      >
                        Next
                      </button>
                    </div>
                  }
                </>
                :
                <form className='pt-5 pb-5' onSubmit={handleSignUpSubmit}>
                  <h1>Sign Up</h1>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  {errors.name && <span className="error">{errors.name}</span>}

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  {errors.email && <span className="error">{errors.email}</span>}

                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  {errors.password && <span className="error">{errors.password}</span>}

                  <button style={{ color: 'white' }} className=' button text-sm font-medium max-sm:text-center border border-[#972fed]
                   px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80]' type="submit">Next</button>

                </form>}
            </div>
          }
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          {isLoading ?
            <div className="loader">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
              <div className="bar4" />
              <div className="bar5" />
              <div className="bar6" />
              <div className="bar7" />
              <div className="bar8" />
              <div className="bar9" />
              <div className="bar10" />
              <div className="bar11" />
              <div className="bar12" />
            </div>
            :
            <div className="modal-content">
              <button className="close-button button border border-[#972fed]
                   px-4 pt-2 pb-[6px]" onClick={handleCloseModal}>
                ×
              </button>
              <form onSubmit={handleSubmitModal}>
                <h1>Login Form</h1>
                <label htmlFor="name">Domain:</label>
                <input
                  type="text"
                  value={domainTitle}
                  onChange={(e) => setDomainTitle(e.target.value)}
                  placeholder="abc.mmit"
                  required
                />
                <label htmlFor="name">Token ID:</label>
                <input
                  type="number"
                  value={domainId}
                  onChange={(e) => setDomainId(e.target.value)}
                  placeholder="12345678"
                  required
                />
                {errorMessage && <p className="error">{errorMessage}</p>}
                <div className="flex gap-2 ">
                  <button style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', color: 'white' }} onClick={handleSubmitModal} className="button text-sm font-medium max-sm:text-center  text-white
                     px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80]" type="submit">
                    Login
                  </button>

                </div>
              </form>
            </div>
          }
        </div>
      )}
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{ backgroundColor: 'gray' }} onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
