
import SmallLink from "../smallLink";

const smallLinkContainer = () => {
  const titles = ['Videojuegos', 'Futbol', 'Ajedrez', 'Cine', 'Acampar', 'Buena musica', 'Memes']
  const icons = ['Videojuegos', 'Futbol', 'Ajedrez', 'Cine', 'Acampar', 'Buena musica', 'Memes']
  return (
    <div>
      {titles.map((title, index) => (
        <SmallLink 
            key={title} 
            icon={icons[index]} 
            title={title} 
            />
      ))}
    </div>
  );
}

export default smallLinkContainer;