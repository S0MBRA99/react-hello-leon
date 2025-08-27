import gonImage from '../../img/Gon HunterxHunter.webp'
import killua from '../../img/killua hunter x hunter.webp'
import meruem from '../../img/meruem-hunter-x-hunter.webp'
import Netero from '../../img/netero-hunter-x-hunter.webp'
import CardStructure from './CardStructure'

const arrayOfObject = [
    {
        title:'Gon Freecss',
        img: gonImage,
        description: `Gon es un chico atlético, rústico y agradable que está en busca de aventura. Además, no es muy bueno en matemáticas. 
        Sin embargo, después de haber pasado mucho tiempo en el bosque cuando era niño, él es muy bueno con los animales.`,
        link: 'https://hunterxhunter.fandom.com/es/wiki/Gon_Freecss'
    },
    {
        title: "Isaac Netero",
        img: Netero,
        alt: "Netero Hunter x Hunter",
        description: `Isaac Netero parece ser un anciano indefenso, pero es sorprendentemente apto y musculoso para su edad. 
        En cuanto a su apariencia física, luce una cola de caballo, una barba espesa y en sus lóbulos extendidos posee dos piercings en ​cada uno.
         Netero suele vestir kimono y un par de geta de un hombre tradicional.`,
        link: "https://hunterxhunter.fandom.com/es/wiki/Isaac_Netero"
    },
    {
        title: "Killua Zoldyck",
        img: killua,
        alt: "Killua Hunter x Hunter",
        description: `En un principio Killua se presenta como un personaje que parece similar a Gon, alegre, atrevido, y lleno de ideas maliciosas,
         aunque en el fondo resultan ser totalmente opuestos, siendo lo contradictorio a lo que cada uno aparenta; 
         por lo que es verdaderamente un chico amable, atento y sensible, forma en la que no le gusta mucho mostrarse.`,
        link: "https://hunterxhunter.fandom.com/es/wiki/Killua_Zoldyck"
    },
    {
        title: "Meruem",
        img: meruem,
        alt: "Meruem Hunter x Hunter",
        description: `Meruem inicialmente se ve como un líder cruel y violento. La intención de la Reina para dar a luz a una descendencia perfecta
         se refleja en la mentalidad de Meruem, siendo arrogante hacia todos. Habla de manera elocuente y ha refinado su gusto por una de sus especies.`,
        link: "https://hunterxhunter.fandom.com/es/wiki/Meruem"
  }
]


function BodyStructure(){
    return(
        <div className='row justify-content-center'>
            <div className = 'col-8 mt-5 bg-primary rounded-2'>
                <h1 className='text-center mb-3'>Hunter x Hunter</h1>
                <p className='text-light'>Hunter × Hunter (ハンター×ハンター, Hantā Hantā), pronunciado «Hunter Hunter», conocido como Cazador X en su primer anime en Hispanoamérica, es un manga escrito e ilustrado por Yoshihiro Togashi. Comenzó su serialización del manga el 3 de marzo de 1998 en la revista Shukan Shonen Jump de Shueisha.</p>
                <a href='https://hunterxhunter.fandom.com/es/wiki/Hunter_%C3%97_Hunter' className='btn btn-warning mb-3'>More info!</a>
            </div>
            <div className = 'col-8 mt-5 d-flex justify-content-center'>
                <div className='row'>                    
                    {arrayOfObject.map((Card)=>(
                        <div className='col-12 col-md-6 col-xxl-3  d-flex justify-content-center'>
                            <CardStructure title={Card.title} img={Card.img} alt={Card.alt} description={Card.description} link={Card.link}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BodyStructure