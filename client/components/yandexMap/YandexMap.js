import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = ({optionMap, $class}) => {
    const {defaultState, geometry, modulesMap, properties, modulesPlacemark} = optionMap;
  return (
    <YMaps>
      <Map defaultState={defaultState} modules={modulesMap} className={$class}>
        <Placemark geometry={geometry} modules={modulesPlacemark} properties={properties} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;