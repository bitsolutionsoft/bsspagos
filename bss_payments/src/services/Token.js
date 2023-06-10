import { useSelector } from 'react-redux'

function Token(){
    const {token}=useSelector(state => state.user )
    return token;
}
export {Token}