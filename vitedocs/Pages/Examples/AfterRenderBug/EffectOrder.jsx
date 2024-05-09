import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useLayoutEffect
} from 'react';

const Context = createContext();

const useRenderCount = () => {
  const countRef = useRef(0);

  countRef.current = countRef.current + 1;

  return countRef.current;
};

const Renders = () => {
  const renders = useRenderCount();

  return <span style={{ color: 'red' }}>{renders}</span>;
};

const useEffectLog = label => {
  useEffect(
    () => {
      console.log(`Effect - ${label}`);
      return () => {
        console.log(`Cleanup - ${label}`);
      };
    },
    [label]
  );
  useLayoutEffect(
    () => {
      console.log(`LayoutEffect - ${label}`);
    },
    [label]
  );
};

const computeStyle = ({ depth }) => {
  return {
    marginLeft: `${depth * 10}px`,
    padding: '5px',
    marginTop: '5px',
    marginBottom: '5px',
    border: '2px solid black'
  };
};

const Inspector = ({ name, depth, child }) => {
  useEffectLog(name);
  return (
    <div style={computeStyle({ depth })}>
      {name} <Renders /> {console.log(name)}
      {child && (
        <Inspector depth={depth + 1} name={child.name} child={child.child} />
      )}
    </div>
  );
};

const children1 = {
  name: 'A',
  child: {
    name: 'B',
    child: {
      name: 'C',
      child: {
        name: 'D',
        child: {
          name: 'E'
        }
      }
    }
  }
};

const children2 = {
  name: 'F',
  child: {
    name: 'G',
    child: {
      name: 'H',
      child: {
        name: 'I',
        child: {
          name: 'J'
        }
      }
    }
  }
};

export default function EffectOrder() {
  const [children, setChildren] = useState(children1);

  const toggleChildren = () => {
    setChildren(prev => {
      if (prev.name === 'A') {
        return children2;
      }
      return children1;
    });
  };

  return (
    <div className="App">
      <Inspector name={children.name} depth={0} child={children.child} />
      <button type="button" onClick={toggleChildren}>
        Toggle Children
      </button>
    </div>
  );
}
