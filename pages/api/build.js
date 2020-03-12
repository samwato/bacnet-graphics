import readBacnet from '../../lib/bacnet/read'

const Build = async (req, res) => {
  const { graphic } = req.query;
  if (graphic !== 'undefined') {
    const json = await import(`../../json/${graphic}.json`)
    const content = json.default
    const livePoints = await content.points.map(async prop => {
      try {
        const oldProp = prop;
        const updateProp = await readBacnet(prop.ip, prop.pointInstance, prop.objectType, 77, 85);
        const newProp = Object.assign(oldProp, updateProp);
        return newProp;
      } catch(err) {
        console.error(err)
        const newProp = prop;
        newProp.error = 1;
        newProp.errorMessage = err
        return newProp;
      }
    });

    content.points = await Promise.all(livePoints);
    res.status(200).json(content);
  } else {
    res.status(500).json(`Failed to load ${graphic} json data`)
  }
}

export default Build
