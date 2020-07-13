import * as THREE from 'three';

var SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight,
  r = 450,
  mouseY = 0,
  mouseX = 0,
  windowHalfY = window.innerHeight / 2,
  windowHalfX = window.innerWidth / 2, //xxx
  camera, scene, renderer;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000 );
  camera.position.z = 1000;
  scene = new THREE.Scene();

  var i, line, material, p,
    // parameters = [[ 0.25, 0xddffcc, 1 ], [ 0.5, 0xffff99, 1 ], [ 0.75, 0x99ff77, 0.75 ], [ 2.1, 0x00aa55, 0.5 ], [ 1.25, 0x000833, 0.8 ],
    //            [ 3.0, 0xaaaaaa, 0.75 ], [ 3.5, 0x55aaff, 0.5 ], [ 4.5, 0xffffff, 0.25 ], [ 5.5, 0x77ff77, 0.125 ]];
    parameters = [[ 0.25, 0xddffcc, 1 ],  [ 0.75, 0x99ff77, 0.75 ], [ 2.1, 0x00aa55, 0.5 ], [ 1.25, 0x000833, 0.8 ],
               [ 3.0, 0xaaaaaa, 0.75 ], [ 3.5, 0x55aaff, 0.5 ], [ 4.5, 0xffffff, 0.25 ], [ 5.5, 0x77ff77, 0.125 ]];


  var geometry = createGeometry();

  for ( i = 0; i < parameters.length; ++ i ) {

    p = parameters[ i ];

    material = new THREE.LineBasicMaterial( { color: p[ 1 ], opacity: p[ 2 ] } );

    line = new THREE.LineSegments( geometry, material );
    line.scale.x = line.scale.y = line.scale.z = p[ 0 ];
    line.userData.originalScale = p[ 0 ];
    
    line.rotation.y = Math.random() * Math.PI;
    line.updateMatrix();
    scene.add( line );
  }

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
  let sphereVisuals = document.getElementById('sphereVisuals')
  sphereVisuals.appendChild( renderer.domElement );

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.addEventListener( 'touchmove', onDocumentTouchMove, false );

  window.addEventListener( 'resize', onWindowResize, false );

}

function createGeometry() {
  var geometry = new THREE.BufferGeometry();
  var vertices = [];
  var vertex = new THREE.Vector3();
  for ( var i = 0; i < 1500; i ++ ) {
    vertex.x = Math.random() * 2 - 1;
    vertex.y = Math.random() * 2 - 1;
    vertex.z = Math.random() * 2 - 1;
    vertex.normalize();
    vertex.multiplyScalar( r );
    vertices.push( vertex.x, vertex.y, vertex.z );
    vertex.multiplyScalar( Math.random() * 0.09 + 1 );
    vertices.push( vertex.x, vertex.y, vertex.z );
  }

  geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
  return geometry;

}

function onWindowResize() {
  windowHalfY = window.innerHeight / 2;
  windowHalfX = window.innerWidth / 2;  //xxx
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  mouseY = event.clientY - windowHalfY;
  mouseX = event.clientX - windowHalfX; //xxx
}

function onDocumentTouchStart( event ) {
  if ( event.touches.length > 1 ) {
    event.preventDefault();
    mouseY = event.touches[ 0 ].pageY - windowHalfY;
    mouseX = event.touches[ 0 ].pageX - windowHalfX; //xxx
  }
}

function onDocumentTouchMove( event ) {
  if ( event.touches.length == 1 ) {
    event.preventDefault();
    mouseY = event.touches[ 0 ].pageY - windowHalfY;
    mouseX = event.touches[ 0 ].pageX - windowHalfX; //xxx
  }
}

//

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
  camera.position.x += ( - mouseX + 200 - camera.position.x ) * .05; //xxx
  camera.lookAt( scene.position );
  renderer.render( scene, camera );

}