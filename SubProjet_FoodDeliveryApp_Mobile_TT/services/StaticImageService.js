import ApiContant from "../constants/ApiContant";
const getFlagIcon= (code='VN',style=ApiContant.coQuocGia.style.flat,size=ApiContant.coQuocGia.size[64]) =>  `${ApiContant.coQuocGia.url}/${code}/${style}/${size}.png`
export default {getFlagIcon};