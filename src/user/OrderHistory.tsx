"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Pagination,
  Grid,
  Tooltip,
} from "@mui/material";
import { MdDownload } from "react-icons/md";
import jsPDF from "jspdf";

const dummyOrders = [
  {
    id: 1,
    product: "Mango Smoothie",
    cost: "₹120",
    date: "2025-10-10",
    orderedTime: "10:30 AM",
    status: "Ordered",
    remarks: "Waiting for confirmation",
  },
  {
    id: 2,
    product: "Apple Juice",
    cost: "₹80",
    date: "2025-10-11",
    orderedTime: "09:45 AM",
    status: "Delivered",
    remarks: "Delivered successfully",
  },
  {
    id: 3,
    product: "Banana Shake",
    cost: "₹90",
    date: "2025-10-12",
    orderedTime: "12:00 PM",
    status: "Cancelled",
    remarks: "Cancelled by user",
  },
  {
    id: 4,
    product: "Grapes Cooler",
    cost: "₹100",
    date: "2025-10-13",
    orderedTime: "11:00 AM",
    status: "Confirmed",
    remarks: "Ready to dispatch",
  },
  {
    id: 5,
    product: "Orange Blast",
    cost: "₹110",
    date: "2025-10-14",
    orderedTime: "02:45 PM",
    status: "Delivered",
    remarks: "Delivered successfully",
  },
  {
    id: 6,
    product: "Pineapple Punch",
    cost: "₹95",
    date: "2025-10-15",
    orderedTime: "10:15 AM",
    status: "Ordered",
    remarks: "Order placed successfully",
  },
  {
    id: 7,
    product: "Kiwi Mix",
    cost: "₹130",
    date: "2025-10-16",
    orderedTime: "03:20 PM",
    status: "Delivered",
    remarks: "Delivered successfully",
  },
  {
    id: 8,
    product: "Watermelon Juice",
    cost: "₹85",
    date: "2025-10-17",
    orderedTime: "01:05 PM",
    status: "Cancelled",
    remarks: "Out of stock",
  },
  {
    id: 9,
    product: "Papaya Shake",
    cost: "₹105",
    date: "2025-10-18",
    orderedTime: "05:30 PM",
    status: "Delivered",
    remarks: "Delivered successfully",
  },
  {
    id: 10,
    product: "Mixed Fruit Bowl",
    cost: "₹150",
    date: "2025-10-19",
    orderedTime: "04:00 PM",
    status: "Confirmed",
    remarks: "Ready to dispatch soon",
  },
];

const OrderHistory = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(dummyOrders.length / itemsPerPage);

  const handleChangePage = (event: any, value: number) => {
    setPage(value);
  };

  const generateInvoicePDF = (order: any) => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Order Invoice", 80, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Order ID: #${order.id}`, 20, 40);
    doc.text(`Product: ${order.product}`, 20, 50);
    doc.text(`Cost: ${order.cost}`, 20, 60);
    doc.text(`Ordered Date: ${order.date}`, 20, 70);
    doc.text(`Ordered Time: ${order.orderedTime}`, 20, 80);
    doc.text(`Status: ${order.status}`, 20, 90);
    doc.text(`Remarks: ${order.remarks}`, 20, 100);

    doc.line(20, 110, 190, 110);
    doc.text("Thank you for your order!", 65, 130);

    doc.save(`Invoice_${order.id}.pdf`);
  };

  const handleDownloadInvoice = (order: any) => {
    generateInvoicePDF(order);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedOrders = dummyOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "#16a34a";
      case "Cancelled":
        return "#dc2626";
      case "Confirmed":
        return "#2563eb";
      case "Ordered":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontFamily: "Bold_M",
          background:
            "linear-gradient(90deg, #e56d42 -24.45%, #ff8521 25.74%, #ff8521 51.17%, #e98d33 116.9%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          mb: 3,
        }}
      >
        Order History
      </Typography>

      {/* Orders List */}
      <Grid container spacing={3} justifyContent="center" mt={3}>
        {paginatedOrders.map((order) => (
          <Grid
            key={order.id}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 320,
                background: "var(--bg)",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                overflow: "hidden",
                color: "var(--white)",
                padding: "20px",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontFamily: "Bold_M", mb: 0.5, fontSize: "18px" }}
              >
                {order.product}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Medium_M",
                  fontSize: "13px",
                  color: "var(--text)",
                  mb: 1.5,
                }}
              >
                <Box component="span" sx={{ color: "var(--secondary)" }}>
                  Order ID:
                </Box>{" "}
                #{order.id}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "var(--secondary)",
                  fontFamily: "Medium_M",
                  fontSize: "20px",
                  mb: 1,
                }}
              >
                {order.cost}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  color: "var(--text)",
                  fontFamily: "Medium_M",
                  lineHeight: 1.4,
                }}
              >
                <Box component="span" sx={{ color: "var(--secondary)" }}>
                  Ordered Date:
                </Box>{" "}
                {order.date}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  color: "var(--text)",
                  fontFamily: "Medium_M",
                  fontSize: "13px",
                }}
              >
                <Box component="span" sx={{ color: "var(--secondary)" }}>
                  Ordered Time:
                </Box>{" "}
                {order.orderedTime}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  fontFamily: "Medium_M",
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: getStatusColor(order.status),
                }}
              >
                <Box component="span" sx={{ color: "var(--secondary)" }}>
                  Status:
                </Box>{" "}
                {order.status}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  fontFamily: "Medium_M",
                  fontSize: "13px",
                  color: "var(--text)",
                }}
              >
                <Box component="span" sx={{ color: "var(--secondary)" }}>
                  Remarks:
                </Box>{" "}
                {order.remarks}
              </Typography>

              {/* Download Invoice Icon */}
              <Tooltip
                title={
                  order.status === "Delivered"
                    ? "Download Invoice"
                    : "Invoice not available"
                }
              >
                <span>
                  <IconButton
                    disabled={order.status !== "Delivered"}
                    onClick={() => handleDownloadInvoice(order)}
                    sx={{
                      color:
                        order.status === "Delivered"
                          ? "var(--secondary)"
                          : "var(--text)",
                      padding: "8px",
                      transition: "0.2s",
                      "&:hover:not(:disabled)": {
                        background: "rgba(255, 133, 33, 0.1)",
                      },
                    }}
                  >
                    <MdDownload size={22} />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              fontFamily: "Medium_M",
              color: "var(--white)",
              borderColor: "var(--secondary)",
              "&:hover": {
                backgroundColor: "var(--secondary)",
              },
            },
            "& .Mui-selected": {
              backgroundColor: "var(--secondary) !important",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default OrderHistory;
