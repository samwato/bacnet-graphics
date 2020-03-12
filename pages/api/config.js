import config from '../../json/config.json'

export default (req, res) => {
  res.status(200).json(config);
}
