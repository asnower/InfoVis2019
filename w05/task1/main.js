function main()
{
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      
      var vertices = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 1, 0],
      ];

      var faces = [
        [0, 1, 2],
        [1, 3, 2],
        [4, 5, 6],
        [5, 7, 6],
        [0, 5, 1],
        [5, 4, 1],
        [3, 6, 2],
        [6, 7, 2],
        [5, 0, 2],
        [5, 2, 7],
        [1, 4, 3],
        [4, 6, 3],
      ];
    

      var geometry = new THREE.Geometry();
      for (let i = 0; i < vertices.length; ++i) {
        geometry.vertices.push(new THREE.Vector3().fromArray(vertices[i]));
      }
      for (let i = 0; i < faces.length; ++i) {
        geometry.faces.push(new THREE.Face3(faces[i][0], faces[i][1], faces[i][2]));
        geometry.faces[i].color = new THREE.Color(1, 0, 0);
      }

      var material = new THREE.MeshBasicMaterial();
      material.vertexColors = THREE.FaceColors;
      var cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
      
      camera.position.z = 5;

      var animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.02;

        renderer.render( scene, camera );
      };

      animate();
}

