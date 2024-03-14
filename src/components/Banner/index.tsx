import { Image } from './styles'

import bannerImg from '../../assets/images/backgroundImg.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>banner</Image>
)

export default Banner
