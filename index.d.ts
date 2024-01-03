type NodeData = {
  data: {
    setCustomData?: Function,
    customData?: string,
    label: string
  }
}

type NodeProps = {data: any, id: string}


type TraverseProps = {nodes: any, edges: any };