"use client";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import Dashboard from "./Dashboard";

const Prebook = () => {
  const rows = [
    {
      name: "John Doe",
      phone: "9876543210",
      quantity: 2,
      date: "2025-10-28",
      status: "Delivered",
      orderTime: "10:30 AM",
      orderId: "ORD001",
      addressVerified: true,
      address: "123, Green Street, Chennai",
    },
    {
      name: "Priya Raj",
      phone: "9090123456",
      quantity: 1,
      date: "2025-10-29",
      status: "Pending",
      orderTime: "02:15 PM",
      orderId: "ORD002",
      addressVerified: false,
      address: "45, Flower Avenue, Coimbatore",
    },
    {
      name: "Arun Kumar",
      phone: "9123456789",
      quantity: 3,
      date: "2025-10-29",
      status: "Confirmed",
      orderTime: "06:45 PM",
      orderId: "ORD003",
      addressVerified: true,
      address: "78, MG Road, Madurai",
    },
  ];

  return (
    <Box sx={{ bgcolor: "var(--lightbg)", borderRadius: "8px",p: { xs: 2, md: 4 },}}>
      <Dashboard />

      {/* Orders Table */}
      <TableContainer
        component={Paper}
        sx={{
          mt: 4,
          borderRadius: "16px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          overflowX: "auto",
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#f5f6fb",
              }}
            >
              {[
                "Name",
                "Phone",
                "Quantity",
                "Date",
                "Status",
                "Order Time",
                "Order ID",
                "Address (True/False)",
                "Address",
                "Action",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Bold_M",
                    color: "#333",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#fafafa",
                  },
                }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color:
                        row.status === "Delivered"
                          ? "green"
                          : row.status === "Pending"
                          ? "orange"
                          : "#0288d1",
                      fontWeight: 600,
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell>{row.orderTime}</TableCell>
                <TableCell>{row.orderId}</TableCell>
                <TableCell>
                  {row.addressVerified ? "✅" : "❌"}
                </TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  {row.address}
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        borderColor: "#7e57c2",
                        color: "#7e57c2",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#ede7f6",
                          borderColor: "#7e57c2",
                        },
                      }}
                    >
                      View
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        backgroundColor: "#7e57c2",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#5e35b1",
                        },
                      }}
                    >
                      Edit
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Prebook;
