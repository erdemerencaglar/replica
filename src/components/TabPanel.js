import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { usePacketStore } from "../store/store";
import Slider from "@mui/material/Slider";

const STANDARD_PAD_COST = 2.9;
const SUPER_PAD_COST = 3.3;
const SUPER_PLUS_PAD_COST = 3.7;
const DAILY_PAD_COST = 1.9;
const SUPER_DAILY_PAD_COST = 2;
const MINI_TAMPON_COST = 3.3;
const STANDARD_TAMPON_COST = 3.7;

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "",
  },
  {
    value: 20,
    label: "",
  },
  {
    value: 30,
    label: "",
  },
  {
    value: 40,
    label: "",
  },
  {
    value: 50,
    label: "",
  },
  {
    value: 60,
    label: "60",
  },
];

const marksDaily = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "",
  },
  {
    value: 20,
    label: "",
  },
  {
    value: 30,
    label: "",
  },
  {
    value: 40,
    label: "",
  },
  {
    value: 50,
    label: "",
  },
  {
    value: 60,
    label: "",
  },
  {
    value: 70,
    label: "",
  },
  {
    value: 80,
    label: "",
  },
  {
    value: 90,
    label: "",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}`;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const updateStandardPad = usePacketStore((s) => s.updateStandardPad);
  const updateSuperPad = usePacketStore((s) => s.updateSuperPad);
  const updateSuperPlusPad = usePacketStore((s) => s.updateSuperPlusPad);
  const updateDailyPad = usePacketStore((s) => s.updateDailyPad);
  const updateSuperDailyPad = usePacketStore((s) => s.updateSuperDailyPad);
  const updateMiniTampon = usePacketStore((s) => s.updateMiniTampon);
  const updateStandardTampon = usePacketStore((s) => s.updateStandardTampon);
  const updateTotalCost = usePacketStore((s) => s.updateTotal);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            sx={{ textTransform: "none" }}
            label="beije Ped"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            label="beije Günlük Ped"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            label="beije Tampon"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography sx={{ textAlign: "left" }}>Standart Ped</Typography>
        <Box sx={{ width: 600 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="auto"
            min={0}
            max={60}
            onChange={(e, val) => updateStandardPad(val * STANDARD_PAD_COST)}
            onChangeCommitted={(e, newValue) => {
              updateStandardPad(newValue * STANDARD_PAD_COST);
              updateTotalCost(newValue * STANDARD_PAD_COST);
            }}
          />
        </Box>

        <Typography sx={{ textAlign: "left" }}>Süper Ped</Typography>
        <Box sx={{ width: 600 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="auto"
            min={0}
            max={60}
            onChange={(e, val) => updateSuperPad(val * SUPER_PAD_COST)}
            onChangeCommitted={(e, newValue) => {
              updateSuperPad(newValue * SUPER_PAD_COST);
              updateTotalCost(newValue * SUPER_PAD_COST);
            }}
          />
        </Box>
        <Typography sx={{ textAlign: "left" }}>Süper+ Ped</Typography>
        <Box sx={{ width: 600 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="auto"
            min={0}
            max={60}
            onChange={(e, val) => updateSuperPlusPad(val * SUPER_PLUS_PAD_COST)}
            onChangeCommitted={(e, newValue) => {
              updateSuperPlusPad(newValue * SUPER_PLUS_PAD_COST);
              updateTotalCost(newValue * SUPER_PLUS_PAD_COST);
            }}
          />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Typography sx={{ textAlign: "left" }}>Günlük Ped</Typography>
        <Box sx={{ width: 600 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            marks={marksDaily}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            onChange={(e, val) => updateDailyPad(val * DAILY_PAD_COST)}
            onChangeCommitted={(e, newValue) => {
              updateDailyPad(newValue * DAILY_PAD_COST);
              updateTotalCost(newValue * DAILY_PAD_COST);
            }}
          />
        </Box>
        <Typography sx={{ textAlign: "left" }}>Süper Günlük Ped</Typography>
        <Box sx={{ width: 600 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            marks={marksDaily}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            onChange={(e, val) =>
              updateSuperDailyPad(val * SUPER_DAILY_PAD_COST)
            }
            onChangeCommitted={(e, newValue) => {
              updateSuperDailyPad(newValue * SUPER_DAILY_PAD_COST);
              updateTotalCost(newValue * SUPER_DAILY_PAD_COST);
            }}
          />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography sx={{ textAlign: "left" }}>Mini Tampon</Typography>
        <Box sx={{ width: 600 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="auto"
            min={0}
            max={60}
            onChange={(e, val) => updateMiniTampon(val * MINI_TAMPON_COST)}
            onChangeCommitted={(e, newValue) => {
              updateMiniTampon(newValue * MINI_TAMPON_COST);
              updateTotalCost(newValue * MINI_TAMPON_COST);
            }}
          />
        </Box>
        <Typography sx={{ textAlign: "left" }}>Standart Tampon</Typography>
        <Box sx={{ width: 600 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="auto"
            min={0}
            max={60}
            onChange={(e, val) =>
              updateStandardTampon(val * STANDARD_TAMPON_COST)
            }
            onChangeCommitted={(e, newValue) => {
              updateStandardTampon(newValue * STANDARD_TAMPON_COST);
              updateTotalCost(newValue * STANDARD_TAMPON_COST);
            }}
          />
        </Box>
      </TabPanel>
    </Box>
  );
}
