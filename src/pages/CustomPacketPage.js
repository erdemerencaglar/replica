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
          alignItems: "center",
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
          sm={12}
          md={5}
        >
          <Grid
            container
            sx={{
              width: "60vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "flex-start",
              p: "1vh",
            }}
          >
            <Grid
              container
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

            <Typography
              fontSize={"15px"}
              sx={{ mt: "20px", textAlign: "left" }}
            >
              Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
              miktarlardan, sana özel bir paket oluşturalım.
            </Typography>
          </Grid>

          <Grid item sx={{ width: "60vh" }} xs={0}>
            <TabPanel />
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
