import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { CircularProgress, Typography } from '@mui/material';
import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

/** STB Position */
const center = {
  lat: -6.569309387952102,
  lng: 106.86607360839844,
};

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string | number };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  children?: ReactNode;
  onIdle?: (map: google.maps.Map) => void;
}

const render = (status: Status) => {
  switch (status) {
    case Status.FAILURE:
      return <Typography color="crimson">Map Error</Typography>;
    case Status.LOADING:
      return <CircularProgress />;
  }
  return <h1>{status}</h1>;
};

const Map: FC<MapProps> = ({ children, style, ...options }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom: 18,
        }),
      );
    }
  }, [ref, map]);

  return (
    <>
      <div id="map" ref={ref} style={style} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const ReactMap: FC<{ style: { [key: string]: string | number } }> = ({
  style,
  ...props
}) => {
  return (
    <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY || ''} render={render}>
      <Map style={style} {...props}>
        <Marker position={center} title="Sekolah Taruna Bangsa" />
      </Map>
    </Wrapper>
  );
};

export default ReactMap;
