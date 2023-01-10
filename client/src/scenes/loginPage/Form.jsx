import { useState } from "react";
import { Box,
 Button,
TextField,
useMediaQuery,
Typography,
useTheme} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import { width } from "@mui/system";


const registerSchema = yup.object({
    firstName: yup.string().required("required"),
    lastName:yup.string().required("required"),
    email:yup.string().email("Invalid email").required("required"),
    password:yup.string().required("required"),
    location:yup.string().required("required"),
    occupation:yup.string().required("required"),
    picture:yup.string().required("required"),
});

const loginSchema = yup.object({
    email: yup.string().email("Invalid email").required("required"),
    password: yup.string().required("required"),
});


const initialValueRegister = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    location:"",
    occupation:"",
    picture:"",
};

const initialValuesLogin = {
    email: "",
    password:"",
}

const Form = () => {
    const [pageType , setPageType] = useState("login");

    const {palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const isLogin
}


export default Form;