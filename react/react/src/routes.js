import React from "react";

const GoogleMaps = React.lazy(() => import("pages/GoogleMaps"));
const ButtonLoadingSpinner = React.lazy(() =>
  import("pages/ButtonLoadingSpinner")
);
const OTPBox = React.lazy(() => import("pages/OTPBox"));
const ContactList = React.lazy(() => import("pages/ContactList"));
const ReactBasics = React.lazy(() => import("pages/ReactBasics"));
const DataTable = React.lazy(() => import("pages/DataTable"));
const Signup = React.lazy(() => import("pages/Signup"));
const FileUpload = React.lazy(() => import("pages/FileUpload"));
const BatteryStatus = React.lazy(() => import("pages/BatteryStatus"));
const CountrySearch = React.lazy(() => import("pages/CountrySearch"));
const DataTable2 = React.lazy(() => import("pages/DataTable2"));
const BuiltWithReact = React.lazy(() => import("pages/BuiltWithReact"));
const AccordionDemo = React.lazy(() => import("pages/AccordionDemo"));
const FileDownloader = React.lazy(() => import("pages/FileDownloader"));


const routes = [
  {
    enabled: true,
    path: "/map",
    component: GoogleMaps,
    navbar: "Geolocation",
    child: [
      {
        name: "Custom Google Maps",
        path: "/map/custom-style",
      },
    ],
  },
  {
    enabled: true,
    path: "/button-loader",
    component: ButtonLoadingSpinner,
    navbar: "Spinners y loadings",
    child: null,
  },
  {
    enabled: true,
    path: "/otp-box",
    component: OTPBox,
    navbar: "Verificación",
    child: null,
  },
  {
    enabled: true,
    path: "/contact-list",
    component: ContactList,
    navbar: "Contactos",
    child: null,
  },
  {
    enabled: true,
    path: "/signup",
    component: Signup,
    navbar: "Registro",
    child: null,
  },
  {
    enabled: true,
    path: "/data-table",
    component: DataTable,
    navbar: "Data Table",
    child: null,
  },
  {
    enabled: true,
    path: "/file-upload",
    component: FileUpload,
    navbar: "Subir archivos",
    child: null,
  },
  {
    enabled: true,
    path: "/battery-status",
    component: BatteryStatus,
    navbar: "Estatus bateria",
    child: null,
  },
  {
    enabled: true,
    path: "/auto-complete",
    component: CountrySearch,
    navbar: "Búsqueda",
    child: null,
  },
  {
    enabled: true,
    path: "/data-table-large",
    component: DataTable2,
    navbar: "",
    child: null,
  },
  {
    enabled: true,
    path: "/built-with-react",
    component: BuiltWithReact,
    navbar: "",
    child: null,
  },
  {
    enabled: true,
    path: "/accordion",
    component: AccordionDemo,
    navbar: "Accordion",
    child: null,
  },
  {
    enabled: true,
    path: "/file-downloader",
    component: FileDownloader,
    navbar: "Descargas",
    child: null,
  },
  {
    enabled: true,
    path: "/react-basics",
    component: ReactBasics,
    navbar: "React basico",
    child: [
      {
        name: "Show y hide",
        path: "/react-basics/show-hide-elements",
      },
    ],
  },
];

export default routes.filter((route) => route.enabled);
