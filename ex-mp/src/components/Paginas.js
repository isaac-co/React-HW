// Ejemplo con las páginas de un sitio para probar react-router
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../styles/Paginas.css'


export function Services() {
  return (
    <div>
      <h2>Nuestros Servicios</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare leo ac congue finibus. Nam tellus dolor, viverra facilisis scelerisque a, luctus sit amet mi. Nulla tortor metus, viverra in cursus at, consectetur ac felis. Donec sagittis semper dui, facilisis vehicula nisl pretium at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed rutrum, sapien non egestas suscipit, augue justo hendrerit felis, vel pretium velit nulla nec est. Suspendisse in risus id eros ultrices facilisis non eu erat. Sed magna enim, posuere id interdum at, consectetur nec nisl. Nulla ultricies magna ipsum, sit amet accumsan eros laoreet iaculis. Etiam urna nulla, commodo et erat et, egestas laoreet orci. Donec ultricies lectus ac nunc viverra molestie. Integer ac auctor ante. Pellentesque mattis sem libero, vel imperdiet sapien tempus vel. Sed mollis nisi turpis, quis egestas nibh finibus tincidunt. Cras pretium lectus sed odio tempor consectetur. Pellentesque in massa mattis, pellentesque nunc nec, condimentum libero
      </p>
    </div>
  );
}
export function History() {
  return (
    <div>
      <h2>Nuestra Historia</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare leo ac congue finibus. Nam tellus dolor, viverra facilisis scelerisque a, luctus sit amet mi. Nulla tortor metus, viverra in cursus at, consectetur ac felis. Donec sagittis semper dui, facilisis vehicula nisl pretium at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed rutrum, sapien non egestas suscipit, augue justo hendrerit felis, vel pretium velit nulla nec est. Suspendisse in risus id eros ultrices facilisis non eu erat. Sed magna enim, posuere id interdum at, consectetur nec nisl. Nulla ultricies magna ipsum, sit amet accumsan eros laoreet iaculis. Etiam urna nulla, commodo et erat et, egestas laoreet orci. Donec ultricies lectus ac nunc viverra molestie. Integer ac auctor ante. Pellentesque mattis sem libero, vel imperdiet sapien tempus vel. Sed mollis nisi turpis, quis egestas nibh finibus tincidunt. Cras pretium lectus sed odio tempor consectetur. Pellentesque in massa mattis, pellentesque nunc nec, condimentum libero
      </p>
      
    </div>
    
  );
}
export function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>Págiona no encontrada</h1>
      <p>
        La página {location.pathname} no existe.
      </p>
    </div>
  );
}

export function Home() {
    return (
      <div>
        <h1>Tecnológico de Monterrey</h1>
      </div>
    );
  }
  
  export function About() {
    return (
      <div>
        <h1>Acerca del Tec</h1>
        <p>
          Nulla ornare aliquam posuere. Cras convallis, libero eget aliquet
          porttitor, ante sapien ornare elit, vel porta lectus nibh vitae lorem.
          Sed egestas magna condimentum, semper leo a, semper ligula. Suspendisse
          lobortis ipsum quis fringilla suscipit. Quisque sed rhoncus risus.
          Mauris vehicula, leo condimentum commodo convallis, ex sapien faucibus
          tortor, a imperdiet erat lorem ac odio. Aenean ultricies pellentesque
          mi, ut aliquet nunc cursus eget. Vestibulum nec varius sapien. Proin
          purus metus, rhoncus at volutpat viverra, porta sit amet lectus. Sed
          malesuada, est eu eleifend sodales, arcu nibh bibendum dolor, vitae
          viverra felis turpis vitae mauris. Morbi cursus magna mauris, in
          pulvinar elit semper ac. Donec eu dolor quis turpis feugiat bibendum
          tincidunt in dolor. Maecenas sit amet ultricies risus. Etiam finibus dui
          vitae diam pretium, semper tincidunt orci tempus. Donec sed eros ac
          sapien feugiat imperdiet.
        </p>
        <ul>
          <li><Link className='link' to ="services">Servicios</Link></li>
          <li><Link className='link' to ="history">Historia</Link></li>
          <li><Link className='link' to ="/">Home</Link></li>
        </ul>
        <div>
        <Outlet />
      </div>
      </div>
      
    );
  }
  
  export function Events() {
    return (
      <div>
        <h1>Eventos</h1>
        <p>
          Maecenas commodo ipsum id ultrices scelerisque. Curabitur vel ligula
          vulputate, iaculis nibh eget, blandit ante. Phasellus eleifend commodo
          mauris et vehicula. Vestibulum dolor nisi, finibus et ultricies a,
          sagittis nec massa. Morbi cursus ex condimentum justo pulvinar, eget
          mattis mauris facilisis. Aliquam at ornare libero. Pellentesque tempus
          est neque, ac malesuada turpis pharetra feugiat. Fusce eget semper ex,
          quis vulputate mauris. Morbi lorem est, consequat nec ligula eu,
          accumsan fermentum turpis. Donec mattis mauris eu ex dictum gravida.
          Phasellus congue feugiat magna, quis placerat orci vulputate ornare.
          Duis tempor laoreet lacus, non rhoncus nisi tempor in. Nulla mollis
          mauris quis libero fermentum rhoncus.
        </p>
      </div>
    );
  }
  
  export function Products() {
    return (
      <div>
        <h1>Productos</h1>
        <p>
          Sed scelerisque euismod justo, at dictum arcu pulvinar eleifend.
          Maecenas placerat sit amet quam ut mollis. Sed ultricies laoreet
          bibendum. Nullam molestie tortor lobortis iaculis condimentum. Nunc ante
          risus, consectetur quis nisl non, ullamcorper commodo purus. Morbi
          sollicitudin, est nec ultrices accumsan, odio tellus maximus libero,
          vitae pulvinar sem dolor in arcu. Praesent ac est magna. Proin dapibus
          nunc quis sapien fermentum tempor. Cras tellus urna, volutpat ut risus
          laoreet, pellentesque hendrerit nisl. Nam accumsan rutrum sem et
          pellentesque. Nunc nec nibh libero. Donec vitae tortor libero. Nunc
          vitae fringilla augue. Nunc eu efficitur est, convallis ultricies nunc.
          Nulla tempus mauris in sagittis consequat. Praesent tincidunt odio in
          euismod efficitur.
        </p>
      </div>
    );
  }
  
  export function Contact() {
    return (
      <div>
        <h1>Contacto</h1>
        <p>
          Praesent dapibus leo quis nisi malesuada, at ultricies augue ornare.
          Praesent dictum, lorem a dignissim tempor, enim lectus cursus nisl, sit
          amet laoreet est libero ut sapien. Integer nisi nunc, faucibus vel enim
          at, auctor dictum est. Praesent scelerisque sollicitudin urna at
          laoreet. Maecenas eleifend malesuada eros et porttitor. Pellentesque
          pharetra mauris at laoreet cursus. Quisque imperdiet, erat a viverra
          sollicitudin, ex lorem convallis nisi, ut convallis nunc velit non
          lectus. Aliquam vulputate magna eget quam vestibulum, at placerat augue
          fringilla. Cras ornare magna vel sem imperdiet mattis.
        </p>
      </div>
    );
  }