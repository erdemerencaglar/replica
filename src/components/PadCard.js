import { Box, Grid, Paper, Typography } from "@mui/material";
import { usePacketStore } from "../store/store";
import Button from "@mui/material/Button";

export default function PadCard() {
  const standardPad = usePacketStore((s) => s.standardPad);
  const superPad = usePacketStore((s) => s.superPad);
  const superPlusPad = usePacketStore((s) => s.superPlusPad);
  const dailyPad = usePacketStore((s) => s.dailyPad);
  const superDailyPad = usePacketStore((s) => s.superDailyPad);
  const miniTampon = usePacketStore((s) => s.miniTampon);
  const standardTampon = usePacketStore((s) => s.standardTampon);
  const updateStandardPad = usePacketStore((s) => s.updateStandardPad);
  const updateSuperPad = usePacketStore((s) => s.updateSuperPad);
  const updateSuperPlusPad = usePacketStore((s) => s.updateSuperPlusPad);
  const updateDailyPad = usePacketStore((s) => s.updateDailyPad);
  const updateSuperDailyPad = usePacketStore((s) => s.updateSuperDailyPad);
  const updateMiniTampon = usePacketStore((s) => s.updateMiniTampon);
  const updateStandardTampon = usePacketStore((s) => s.updateStandardTampon);
  const updateTotalCost = usePacketStore((s) => s.updateTotal);

  return (
    <div>
      <Grid
        container
        component={Paper}
        sx={{ width: "40vh", mt: "25px", mb: "25px" }}
      >
        {standardPad || superPad || superPlusPad ? (
          <Grid item sx={{ p: "1vh" }}>
            <Typography fontSize={"20px"} sx={{ textAlign: "left" }}>
              Ped Paketleri
            </Typography>
            {(() => {
              if (standardPad && superPad && superPlusPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {standardPad} Standard Ped, {superPad} Süper Ped ve{" "}
                    {superPlusPad} Süper+ Ped
                  </Typography>
                );
              } else if (standardPad && superPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {standardPad} Standard Ped ve {superPad} Süper Ped
                  </Typography>
                );
              } else if (superPad && superPlusPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {superPad} Süper Ped ve {superPlusPad} Süper+ Ped
                  </Typography>
                );
              } else if (standardPad && superPlusPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {standardPad} Standard Ped ve {superPlusPad} Süper+ Ped
                  </Typography>
                );
              } else if (standardPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {standardPad} Standard Ped
                  </Typography>
                );
              } else if (superPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {superPad} Süper Ped
                  </Typography>
                );
              } else if (superPlusPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {superPlusPad} Süper+ Ped
                  </Typography>
                );
              } else {
              }
            })()}
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Button
                variant="text"
                sx={{ textTransform: "none", fontWeight: "bold", p: "0" }}
                onClick={() => {
                  updateStandardPad(0);
                  updateSuperPad(0);
                  updateSuperPlusPad(0);
                  updateTotalCost(0);
                }}
              >
                Paketten Çıkar
              </Button>
            </Box>
          </Grid>
        ) : null}
      </Grid>

      <Grid
        container
        component={Paper}
        sx={{ width: "40vh", mt: "25px", mb: "25px" }}
      >
        {superDailyPad || dailyPad ? (
          <Grid item sx={{ p: "1vh" }}>
            <Typography fontSize={"20px"} sx={{ textAlign: "left" }}>
              Günlük Ped Paketleri
            </Typography>

            {(() => {
              if (superDailyPad && dailyPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {dailyPad} Günlük Ped ve {superDailyPad} Süper Günlük Ped
                  </Typography>
                );
              } else if (superDailyPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {superDailyPad} Süper Günlük Ped
                  </Typography>
                );
              } else if (dailyPad) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {dailyPad} Günlük Ped
                  </Typography>
                );
              } else {
              }
            })()}
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Button
                variant="text"
                sx={{ textTransform: "none", fontWeight: "bold", p: "0" }}
                onClick={() => {
                  updateDailyPad(0);
                  updateSuperDailyPad(0);
                  updateTotalCost(0);
                }}
              >
                Paketten Çıkar
              </Button>
            </Box>
          </Grid>
        ) : null}
      </Grid>

      <Grid
        container
        component={Paper}
        sx={{ width: "40vh", mt: "25px", mb: "25px" }}
      >
        {miniTampon || standardTampon ? (
          <Grid item sx={{ p: "1vh" }}>
            <Typography fontSize={"20px"}>Tampon Paketleri</Typography>
            {(() => {
              if (miniTampon && standardTampon) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {miniTampon} Mini Tampon ve {standardTampon} Standart Tampon
                  </Typography>
                );
              } else if (miniTampon) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {miniTampon} Mini Tampon
                  </Typography>
                );
              } else if (standardTampon) {
                return (
                  <Typography
                    fontSize={"15px"}
                    color={"#666666"}
                    sx={{ textAlign: "left" }}
                  >
                    {standardTampon} Standart Tampon
                  </Typography>
                );
              } else {
              }
            })()}
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  p: "0",
                }}
                onClick={() => {
                  updateMiniTampon(0);
                  updateStandardTampon(0);
                  updateTotalCost(0);
                }}
              >
                Paketten Çıkar
              </Button>
            </Box>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}
