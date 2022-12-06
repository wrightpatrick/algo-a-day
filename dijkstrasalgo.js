// Begin with a set of nodes, all of which are unvisited.
// Create a set of the unvisited nodes called the unvisited set consisting of all the nodes.
// Assign every node an initial distance value. This will be set to zero for the starting node, and infinity for all other nodes.
// Set the starting node as the current node.
// For each current node, calculate the tentative distance to each of its unvisited neighbor nodes. Add the distance from the current node to the neighbor node to the distance from the starting node.
// When all unvisited neighbor nodes of the current node have been mapped, mark the current node as visited, removing it from the unvisited set. Visited nodes will not be checked again.
// If the specific destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance from the start node to the nodes in the unvisited set is infinity (meaning there is no connection between the start node and remaining unvisited nodes), then stop. The algorithm has finished.
// Otherwise, select the unvisited node with the smallest tentative distance, set it as the new “current node”, and repeat the the process of calculating the tentative distance to each of its unvisited neighbor nodes.


let graph = {
    start: { A: 5, B: 2 },
    A: { start: 1, C: 4, D: 2 },
    B: { A: 8, D: 7 },
    C: { D: 6, finish: 3 },
    D: { finish: 1 },
    finish: {},
};


let shortestDistanceNode = (distances, visited) => {
    // create a default value for shortest
    let shortest = null;

    // for each node in the distances object
    for (let node in distances) {
        // if no node has been assigned to shortest yet
        // or if the current node's distance is smaller than the current shortest
        let currentIsShortest = shortest === null || distances[node] < distances[shortest];

        // and if the current node is in the unvisited set
        if (currentIsShortest && !visited.includes(node)) {
            // update shortest to be the current node
            shortest = node;
        }
    }
    return shortest;
};

let findShortestPath = (graph, startNode, endNode) => {
 
    // track distances from the start node using a hash object
      let distances = {};
    distances[endNode] = "Infinity";
    distances = Object.assign(distances, graph[startNode]);
   // track paths using a hash object
    let parents = { endNode: null };
    for (let child in graph[startNode]) {
     parents[child] = startNode;
    }
     
    // collect visited nodes
      let visited = [];
   // find the nearest node
      let node = shortestDistanceNode(distances, visited);
    
    // for that node:
    while (node) {
    // find its distance from the start node & its child nodes
     let distance = distances[node];
     let children = graph[node]; 
         
    // for each of those child nodes:
         for (let child in children) {
     
     // make sure each child node is not the start node
           if (String(child) === String(startNode)) {
             continue;
          } else {
             // save the distance from the start node to the child node
             let newdistance = distance + children[child];
   // if there's no recorded distance from the start node to the child node in the distances object
   // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
             if (!distances[child] || distances[child] > newdistance) {
   // save the distance to the object
        distances[child] = newdistance;
   // record the path
        parents[child] = node;
       } 
            }
          }  
         // move the current node to the visited set
         visited.push(node);
   // move to the nearest neighbor node
         node = shortestDistanceNode(distances, visited);
       }
     
    // using the stored paths from start node to end node
    // record the shortest path
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
     shortestPath.push(parent);
     parent = parents[parent];
    }
    shortestPath.reverse();
     
    //this is the shortest path
    let results = {
     distance: distances[endNode],
     path: shortestPath,
    };
    // return the shortest path & the end node's distance from the start node
      return results;
   };

console.log(findShortestPath(graph, "A", "D"));
console.log(findShortestPath(graph, "A", "B"));
console.log(findShortestPath(graph, "A", "start"));
console.log(findShortestPath(graph, "start", "finish"));