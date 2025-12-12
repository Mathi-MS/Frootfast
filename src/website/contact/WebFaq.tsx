import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How does the fruit delivery service work?",
    answer:
      "We prepare fresh, cut fruits every morning and deliver them straight to your door. You can choose daily, weekly, or monthly plans based on your needs.",
  },
  {
    question: "Are the fruits washed and hygienically prepared?",
    answer:
      "Yes! All fruits are washed, cleaned, and cut in a neat, home-style hygienic environment before packing.",
  },
  {
    question: "What time will my order be delivered?",
    answer:
      "Most deliveries are completed in the early morning so you can start your day fresh.",
  },
  {
    question: "Can I customize my fruit box?",
    answer:
      "Yes, you can request to add or remove certain fruits based on availability. We try our best to match your preference.",
  },
  {
    question: "What types of fruits do you include?",
    answer:
      "We include a mix of seasonal and fresh fruits. The selection may vary daily based on freshness and availability.",
  },
  {
    question: "Do you offer refunds or replacements?",
    answer:
      "If there’s ever an issue with your box, we will replace it or provide a suitable solution. Your satisfaction matters to us.",
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
        sx={{ mb: "30px !important",fontFamily:"Regular_M" }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ LIST */}
      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        {faqData.map((item, index) => (
          <Accordion key={index} sx={{p:1}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600} sx={{fontFamily:"Regular_M",opacity:".8"}}>{item.question}</Typography>
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
