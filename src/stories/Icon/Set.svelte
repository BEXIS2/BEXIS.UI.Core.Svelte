<script>
  import Fa from 'svelte-fa/src/fa.svelte'

  import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
  import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
  import { Row,Col } from 'sveltestrap';


</script>

<div style="margin:1rem 0; ">
<a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free" target="_blank">Free Solid Awesome Font Icons v5</a> <br/>
<a href="https://www.npmjs.com/package/svelte-fa" target="blank" >more informations</a>
</div>


<Row>
 <Col xs=2> 
  <Fa icon={faAngleRight} />
 </Col>
 <Col> 
  <b>faAngleRight</b> - fa-angle-right
 </Col>
</Row>

<Row>
 <Col xs=2> 
  <Fa icon={faAngleDown}/>
 </Col>
 <Col> 
  <b>faAngleDown</b> - fa-angle-down
 </Col>
</Row>

<Row>
 <Col xs=2> 
  <Fa icon={faAddressBook}/>
 </Col>
 <Col> 
  <b>faAddressBook</b> - fa-adress-book
 </Col>
</Row>


