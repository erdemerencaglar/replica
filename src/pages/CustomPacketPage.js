import { Box, Grid, Typography, Button, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import TabPanel from "../components/TabPanel";
import CssBaseline from "@mui/material/CssBaseline";
import packet from "../images/packet.webp";
import { usePacketStore } from "../store/store";
import PadCard from "../components/PadCard";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export function CustomPacketPage() {
  const totalCost = usePacketStore((s) => s.total);

  return (
    <div className="custom-packet-page">
      <CssBaseline />

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Grid
          item
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          md={5}
        >
          <Grid>
            <Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography fontSize={"30px"} fontWeight={"bold"}>
                  Kendi Paketini Oluştur
                </Typography>
                <Link
                  href="/know-us/how-it-works"
                  sx={{ textDecoration: "none" }}
                >
                  <Typography fontSize={"15px"} color="primary">
                    Nasıl Çalışır?
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid>
              <Typography
                fontSize={"15px"}
                sx={{ mt: "20px", textAlign: "left" }}
              >
                Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
                miktarlardan, sana özel bir paket oluşturalım.
              </Typography>
              <TabPanel />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            component={Paper}
            sx={{
              width: "45vh",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              p: "25px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                width: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                fontSize={"30px"}
                fontWeight={"bold"}
                sx={{ textAlign: "left" }}
              >
                Özel Paketin
              </Typography>
              <Grid
                item
                component={Paper}
                sx={{
                  width: "40vh",
                  mt: "25px",
                  mb: "25px",
                  display: "flex",
                  p: "8px",
                  boxShadow: "0 8px 10px #F0F0F0",
                }}
              >
                <AutorenewIcon color={"#666666"} />
                <Typography
                  fontSize={"15px"}
                  sx={{ textAlign: "left", ml: "8px" }}
                  color={"#666666"}
                >
                  2 ayda bir gönderim
                </Typography>
              </Grid>
              <img src={packet} />
              <PadCard />
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "16px",
                width: "40vh",
                textTransform: "none",
                fontWeight: "bold",
              }}
              color="secondary"
              disabled={!totalCost}
            >
              Sepete Ekle (₺{totalCost})
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
