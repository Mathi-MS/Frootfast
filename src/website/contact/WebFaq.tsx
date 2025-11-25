import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How fresh are the fruits delivered?",
    answer:
      "All fruits are cut fresh every morning between 4 AM - 7 AM and delivered before 8 AM to ensure maximum freshness.",
  },
  {
    question: "Which areas do you deliver?",
    answer:
      "We currently serve multiple major cities and continue expanding. Enter your pincode during signup to check service availability.",
  },
  {
    question: "Can I pause or cancel my subscription?",
    answer:
      "Yes, you can pause, skip, or cancel your subscription anytime through your dashboard.",
  },
  {
    question: "Are the fruits hygienically packed?",
    answer:
      "Absolutely. We use ISO-certified hygiene processes and sealed, food-grade packaging.",
  },
];

const WebFaq = () => {
  return (
    <Box className="website-container" sx={{ py: 8,bgcolor:"var(--white)" }}>
      
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{ mb: 5,fontFamily:"Regular_M" }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ LIST */}
      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        {faqData.map((item, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600} sx={{fontFamily:"Regular_M"}}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555", lineHeight: 1.6, fontFamily:"Regular_M"}} >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

    </Box>
  );
};

export default WebFaq;
