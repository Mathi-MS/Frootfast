import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { images } from './assets/Images/Images';
import { useNavigate } from 'react-router-dom';

const LaunchingSoon = () => {
    const navigate =useNavigate ()
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-01-05T00:00:00').getTime();
        
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    return (
        <Box
            sx={{
                      minHeight: "100vh",
                      backgroundImage: `url(${images.userbackground})`,
                      backgroundRepeat: "repeat",
                      backgroundSize: "600px",
                      backgroundPosition: "inherit",
                      color: "var(--white)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      "@media (max-width: 600px)": {
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                      },
                    }}
        >
           <Box sx={{
               background: "#000000b7",
               width: { xs: "90%", sm: "max-content" },
               maxWidth: "500px",
               padding: { xs: "20px", sm: "30px", md: "40px" },
               borderRadius: "10px",
               margin: { xs: "20px", sm: "0" }
           }}>
            <Box component={"img"} src={images.logo} alt='logo' width={90}/>

             <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '20px', sm: '20px', md: '22px' },
                    fontFamily: 'Bold_M',
                    background: 'linear-gradient(90deg, #e56d42 -24.45%, #ff8521 25.74%, #ff8521 51.17%, #e98d33 116.9%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                    marginBottom: { xs: '15px !important', md: '20px !important' },
                    textAlign: 'center'
                }}
            >
                Frootfast Launching Soon
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: '15px', md: '20px' },
                    maxWidth: '400px',
                    minWidth: { xs: 'auto', sm: '400px' },
                    width: '100%',
                    marginInline: 'auto'
                }}
            >
                {/* Countdown Display */}
                <Box
                    sx={{
                        background: '#25410d',
                        border: '2px solid rgba(255, 255, 255, .3)',
                        boxShadow: '0 4px 6px #2c9d424d',
                        borderRadius: '8px',
                        padding: { xs: '15px', md: '20px' },
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '30px', sm: '28px', md: '36px', lg: '48px' },
                            fontFamily: 'Bold_M',
                            color: 'var(--white)',
                            letterSpacing: { xs: '0.5px', md: '1px', lg: '2px' },
                            marginBottom: { xs: '8px', md: '10px' },
                            lineHeight: 1.2
                        }}
                    >
                        {String(timeLeft.days).padStart(2, '0')}:{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </Typography>
                    
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: { xs: '8px', sm: '12px', md: '20px', lg: '25px' },
                            fontSize: { xs: '9px', sm: '11px', md: '13px', lg: '14px' },
                            color: 'var(--secondary)',
                            fontFamily: 'Medium_M',
                            letterSpacing: { xs: '0.5px', md: '1px' }
                        }}
                    >
                        <span>DAYS</span>
                        <span>HRS</span>
                        <span>MINS</span>
                        <span>SECS</span>
                    </Box>
                </Box>

                {/* Launch Date */}
                <Box
                    onClick={() => navigate("/demo")}
                    sx={{
                        background: '#25410d',
                        border: '2px solid rgba(255, 255, 255, .3)',
                        boxShadow: '0 4px 6px #2c9d424d',
                        borderRadius: '8px',
                        padding: { xs: '12px', md: '15px' },
                        textAlign: 'center',
                        cursor: 'pointer',
                        "&:hover": { opacity: 0.8 }
                    }}
                >
                    <Typography
                        sx={{
                            color: 'var(--white)',
                            fontSize: { xs: '14px', md: '16px' },
                            fontFamily: 'Medium_M',
                        }}
                    >
                        Preview Our Demo
                    </Typography>
                </Box>


                {/* Message */}
                <Typography
                    sx={{
                        color: 'var(--white)',
                        fontSize: { xs: '12px', md: '14px' },
                        fontFamily: 'Medium_M',
                        textAlign: 'center',
                        opacity: 0.9,
                        padding: { xs: '0 10px', md: '0' }
                    }}
                >
                    Get ready for fresh fruits delivered to your doorstep!
                </Typography>
            </Box>
           </Box>
        </Box>
    );
};

export default LaunchingSoon;