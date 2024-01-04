import { Node,Edge } from 'reactflow';

function getNodeLabel(node: Node) {
  // Todo: Add other field
  return (node.type === 'custom') ? node.data.customData : node.data.label;
}


// Build ChatGPT prompt line for a node
// Todo: Uniquely identify nodes instad of just writing the label
function buildNodeDescription(node: Node): string {
  const label = getNodeLabel(node);
  let description = `Entity: ${label}`;
  if (node.data.customData) {
    description += " - " + node.data.customData;
  }
  return description;
}

// Build ChatGPT prompt line for an edge
function buildEdgeDescription(edge: Edge,source: Node,dest: Node): string {
  return `${getNodeLabel(source)} CONNECTS TO ${getNodeLabel(dest)}`;
};


export function traverse(nodes: Node[],edges: Edge[],initialNode: string) {

  // Map from node names to objects
  const nodeMap: Record<string,Node> = Object.fromEntries(nodes.map(node => [node.id,node]));
  edges = structuredClone(edges);

  if (!nodeMap[initialNode]) { throw new Error('Starting node not found!') }


  // Graph description to send to ChatGPT
  const description: string[] = [];

  // Traverse list using Breadth-First Search
  const queue: string[] = [initialNode];
  const visitedNodes: Record<string,boolean> = { initialNode: true };
  while (queue.length > 0) {
    const currentNodeName = queue.shift()!;
    const currentNode = nodeMap[currentNodeName];
    console.log("Node: ", currentNode)

    // Maybe push this first time node is referenced?
    description.push(buildNodeDescription(currentNode));
    visitedNodes[currentNode.id] = true;

    // Add all successor nodes.
    // Use 'filter' to remove edges from edge list once they've been described.
    edges.filter(edge => {
      if (edge.source === currentNode.id) {
        // Describe connection
        description.push(buildEdgeDescription(edge,nodeMap[edge.source],nodeMap[edge.target]))
        // Follow edge
        if (!visitedNodes[edge.target]) {
          queue.push(edge.target);
        }
        return false;
      }
      return true;
    });
  }

  return description;

};
