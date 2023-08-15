"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[3805],{5900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>N,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var p=a(7462),n=(a(7294),a(3905)),r=(a(1694),a(3707)),i=(a(6533),a(505));const o={sidebar_position:2},s="Heapsort",l={unversionedId:"heap-complexity/heapsort",id:"heap-complexity/heapsort",title:"Heapsort",description:"Heapsort is a comparison-based sorting algorithm that builds a binary heap data structure and repeatedly extracts the maximum element to sort a given array.",source:"@site/docs/02-heap-complexity/heapsort.md",sourceDirName:"02-heap-complexity",slug:"/heap-complexity/heapsort",permalink:"/2023/notes/heap-complexity/heapsort",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Binary Heap",permalink:"/2023/notes/heap-complexity/binary-heap"},next:{title:"Computation Time",permalink:"/2023/notes/heap-complexity/computation-time"}},m={},h=[{value:"Goals",id:"goals",level:3},{value:"Introduction",id:"introduction",level:2},{value:"(P)roblem Statement",id:"problem-statement",level:3},{value:"Test (C)ases",id:"test-cases",level:3},{value:"(D)esign of Algorithm",id:"design-of-algorithm",level:3}],k={toc:h},d="wrapper";function N(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,p.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"heapsort"},"Heapsort"),(0,n.kt)(i.Z,{mdxType:"ChatBaseBubble"}),"Heapsort is a comparison-based sorting algorithm that builds a binary heap data structure and repeatedly extracts the maximum element to sort a given array.",(0,n.kt)("h3",{id:"goals"},"Goals"),(0,n.kt)("p",null,"By the end of this lesson, you should be able to implement ",(0,n.kt)("strong",{parentName:"p"},"heapsort")," using iteration."),(0,n.kt)("admonition",{title:"Keywords",type:"keyword"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"heapsort"))),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Now, we can consider Heapsort algorithm. The idea of a heapsort is pretty simple. For any arbitrary array, we can sort the integers in the array by first building a ",(0,n.kt)("em",{parentName:"p"},"max-heap"),". Once the max-heap is built, we know that the maximum is at the ",(0,n.kt)("em",{parentName:"p"},"root")," node. With this, we can swap the ",(0,n.kt)("em",{parentName:"p"},"root")," node with the last element and then exclude it from our heap. We then should restore the ",(0,n.kt)("em",{parentName:"p"},"max-heap property")," after this swap because now the ",(0,n.kt)("em",{parentName:"p"},"root")," node will be a small number. We can do this repetitively until there is no more element in the heap."),(0,n.kt)("h3",{id:"problem-statement"},"(P)roblem Statement"),(0,n.kt)("p",null,"Given an arbitrary array of integers, sort the element using heapsort algorithm."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Input: array of integers\nOutput: None\nProcess: Sort the elements of the array in place using heapsort\n")),(0,n.kt)("h3",{id:"test-cases"},"Test (C)ases"),(0,n.kt)("p",null,"Let's use the same example as in the previous seciton. Let's say we have the following array."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"[1, 2, 8, 7, 14, 9, 3, 10, 4, 16]")),(0,n.kt)("p",null,"We will sort the elements following these steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Build a max-heap from this array. The previous section has shown that the final output of building a max-heap will be:"),(0,n.kt)("p",{parentName:"li"},"[16, 14, 9, 10, 2, 8, 3, 7, 4, 1]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now, we will swap the largest element with the last element, and exclude it from the heap. We will put the excluded element in what we called as ",(0,n.kt)("strong",{parentName:"p"},"sorted")," of the list. This sorted section is separated by ",(0,n.kt)("inlineCode",{parentName:"p"},"||")," in the list below."),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"1"),", 14, 9, 10, 2, 8, 3, 7, 4 ,|| ",(0,n.kt)("strong",{parentName:"p"},"16"),"]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Notice, now, that the array does not satisfy the ",(0,n.kt)("em",{parentName:"p"},"max-heap property"),". So we must ",(0,n.kt)("em",{parentName:"p"},"max-heapify")," the array to push the element 1 down to its place. The process of ",(0,n.kt)("em",{parentName:"p"},"max-heapify")," from the root node will result in:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"1"),", ",(0,n.kt)("strong",{parentName:"p"},"14"),", 9, 10, 2, 8, 3, 7, 4, || 16]"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"14"),", ",(0,n.kt)("strong",{parentName:"p"},"1"),", 9, 10, 2, 8, 3, 7, 4, || 16]"),(0,n.kt)("p",{parentName:"li"},"heap = ","[14, ",(0,n.kt)("strong",{parentName:"p"},"10"),", 9, ",(0,n.kt)("strong",{parentName:"p"},"1"),", 2, 8, 3, 7, 4, || 16]"),(0,n.kt)("p",{parentName:"li"},"heap = ","[14, 10, 9, ",(0,n.kt)("strong",{parentName:"p"},"7"),", 2, 8, 3, ",(0,n.kt)("strong",{parentName:"p"},"1"),", 4, || 16]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once we have restored the ",(0,n.kt)("em",{parentName:"p"},"max-heap property"),", we can take out the largest element from the first element and swap it with the last element in the heap."),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"4"),", 10, 9, 7, 2, 8, 3, 1, || ",(0,n.kt)("strong",{parentName:"p"},"14"),", 16]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We then ",(0,n.kt)("em",{parentName:"p"},"max-heapify")," the heap again to restore the ",(0,n.kt)("em",{parentName:"p"},"max-heap property"),"."),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"4"),", ",(0,n.kt)("strong",{parentName:"p"},"10"),", 9, 7, 2, 8, 3, 1, || ",(0,n.kt)("strong",{parentName:"p"},"14"),", 16]"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"10"),", ",(0,n.kt)("strong",{parentName:"p"},"4"),", 9, 7, 2, 8, 3, 1, || ",(0,n.kt)("strong",{parentName:"p"},"14"),", 16]"),(0,n.kt)("p",{parentName:"li"},"heap = ","[10, ",(0,n.kt)("strong",{parentName:"p"},"7"),", 9, ",(0,n.kt)("strong",{parentName:"p"},"4"),", 2, 8, 3, 1, || ",(0,n.kt)("strong",{parentName:"p"},"14"),", 16]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We then swap the largest element with the last element in the heap, and take it out from the heap."),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"1"),", 7, 9, 4, 2, 8, 3, || ",(0,n.kt)("strong",{parentName:"p"},"10"),", 14, 16]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The same process of ",(0,n.kt)("em",{parentName:"p"},"max-heapify")," happens again. We will now ",(0,n.kt)("em",{parentName:"p"},"remove")," the intermediate step and only show the first and the final state of the heaps."),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"1"),", 7, 9, 4, 2, 8, 3, || ",(0,n.kt)("strong",{parentName:"p"},"10"),", 14, 16]"),(0,n.kt)("p",{parentName:"li"},"heap = ","[9, 7, 8, 4, 2, ",(0,n.kt)("strong",{parentName:"p"},"1"),", 3, || ",(0,n.kt)("strong",{parentName:"p"},"10"),", 14, 16]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We swap and take out again the largest element. The next iteration would be:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"3"),", 7, 8, 4, 2, ",(0,n.kt)("strong",{parentName:"p"},"1"),", || ",(0,n.kt)("strong",{parentName:"p"},"9"),", 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"then we max-heapify the array:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[8, 7, ",(0,n.kt)("strong",{parentName:"p"},"3"),", 4, 2, 1, || ",(0,n.kt)("strong",{parentName:"p"},"9"),", 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"1"),", 7, 3, 4, 2, || ",(0,n.kt)("strong",{parentName:"p"},"8"),", 9, 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"and max-heapify:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[7, 4, 3, ",(0,n.kt)("strong",{parentName:"p"},"1"),", 2, || ",(0,n.kt)("strong",{parentName:"p"},"8"),", 9, 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"2"),", 4, 3, 1, || ",(0,n.kt)("strong",{parentName:"p"},"7"),", 8, 9, 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"and max-heapify:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[4, ",(0,n.kt)("strong",{parentName:"p"},"2"),", 3, 1, || ",(0,n.kt)("strong",{parentName:"p"},"7"),", 8, 9, 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"1"),", 2, 3, || ",(0,n.kt)("strong",{parentName:"p"},"4"),", 7, 8, 9, 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"and max-heapify:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[3, 2, ",(0,n.kt)("strong",{parentName:"p"},"1"),", || ",(0,n.kt)("strong",{parentName:"p"},"4"),", 7, 8, 9, 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"1"),", 2, || ",(0,n.kt)("strong",{parentName:"p"},"3"),", 4, 7, 8, 9, 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"and max-heapify:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[2, ",(0,n.kt)("strong",{parentName:"p"},"1"),", || ",(0,n.kt)("strong",{parentName:"p"},"3"),", 4, 7, 8, 9, 10, 14, 16]"),(0,n.kt)("p",{parentName:"li"},"Swapping and taking out the largest element:"),(0,n.kt)("p",{parentName:"li"},"heap = ","[",(0,n.kt)("strong",{parentName:"p"},"1"),", || ",(0,n.kt)("strong",{parentName:"p"},"2"),", 3, 4, 7, 8, 9, 10, 14, 16]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"At this point in time, the array is already sorted. If ",(0,n.kt)("inlineCode",{parentName:"p"},"heap")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"sorted")," are not a separate array but rather one single array, we will have:"),(0,n.kt)("p",{parentName:"li"},"result = ","[1, 2, 3, 4, 7, 8, 9, 10, 14, 16]"))),(0,n.kt)("h3",{id:"design-of-algorithm"},"(D)esign of Algorithm"),(0,n.kt)("p",null,"Let's write down the steps in the previous section in a pseudocode."),(0,n.kt)(r.Z,{title:"Show Pseudocode",mdxType:"DeepDive"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"def heapsort(array):\nInput:\n  - array: any arbitrary array\nOutput: None\nSteps:\n1. call build-max-heap(array)\n2. heap_end_pos = length of array - 1 # index of the last element in the heap\n3. As long as (heap_end_pos > 0), do:\n    3.1 swap( array[0], array[heap_end_pos])\n    3.2 heap_end_pos = heap_end_pos -1 # reduce heap size\n    3.3 call max-heapify(array[from index 0 to heap_end_pos inclusive], 0)\n"))),(0,n.kt)("p",null,"We first call the procedure in the previous section called ",(0,n.kt)("inlineCode",{parentName:"p"},"build-max-heap")," to create the ",(0,n.kt)("em",{parentName:"p"},"max-heap")," data structure. We then start from the last element in the heap and swap it with the largest element (always at index 0)."),(0,n.kt)("p",null,"We reduce the variable ",(0,n.kt)("inlineCode",{parentName:"p"},"heap_end_pos")," to reduce the heap size and exclude the largest element from the heap."),(0,n.kt)("p",null,"Then, we can call ",(0,n.kt)("inlineCode",{parentName:"p"},"max-heapify")," on a subarray. The subarray starts from index 0 of the current array up to index ",(0,n.kt)("inlineCode",{parentName:"p"},"heap_end_pos"),". In this way, we exclude the largest element from being ",(0,n.kt)("em",{parentName:"p"},"max-heapified"),"."),(0,n.kt)("p",null,"The second argument of ",(0,n.kt)("inlineCode",{parentName:"p"},"max-heapify")," is the starting node where the process should begins. In this case, we always want to start ",(0,n.kt)("inlineCode",{parentName:"p"},"max-heapify")," from index 0 because this is the node where we replace the largest element with some small element from the end of the heap."))}N.isMDXComponent=!0}}]);