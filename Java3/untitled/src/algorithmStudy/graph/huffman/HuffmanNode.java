package algorithmStudy.graph.huffman;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

class HuffmanNode {
    char data;
    int frequency;
    HuffmanNode left, right;

    // Constructor to create a new node
    public HuffmanNode(char data, int frequency) {
        this.data = data;
        this.frequency = frequency;
        left = right = null;
    }
}

class HuffmanCoding {
    // Function to generate the Huffman Codes
    public static Map<Character, String> generateHuffmanCodes(String text) {
        Map<Character, Integer> frequencyMap = new HashMap<>();
        for (char c : text.toCharArray()) {
            frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);
        }

        // Create a priority queue (min-heap) for Huffman Nodes
        PriorityQueue<HuffmanNode> minHeap = new PriorityQueue<>(Comparator.comparingInt(node -> node.frequency));

        // Build the Huffman Tree
        for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {
            minHeap.add(new HuffmanNode(entry.getKey(), entry.getValue()));
        }

        while (minHeap.size() > 1) {
            HuffmanNode left = minHeap.poll();
            HuffmanNode right = minHeap.poll();

            HuffmanNode newNode = new HuffmanNode('\0', left.frequency + right.frequency);
            newNode.left = left;
            newNode.right = right;

            minHeap.add(newNode);
        }

        // Generate Huffman codes by traversing the Huffman tree
        Map<Character, String> huffmanCodes = new HashMap<>();
        generateCodes(minHeap.peek(), "", huffmanCodes);;

        return huffmanCodes;
    }

    // Helper function
    private static void generateCodes(HuffmanNode root, String code, Map<Character, String> huffmanCodes) {
        if (root == null) {
            return;
        }

        if (root.left == null && root.right == null) {
            huffmanCodes.put(root.data, code);
        }

        generateCodes(root.left, code + "0", huffmanCodes);
        generateCodes(root.right, code + "1", huffmanCodes);
    }

    // Function to encode a given text using Huffman codes
    public static String encode(String text, Map<Character, String> huffmanCodes) {
        StringBuilder encodedText = new StringBuilder();
        for (char c : text.toCharArray()) {
            encodedText.append(huffmanCodes.get(c));
        }
        return encodedText.toString();
    }

    // Function to print the Huffman Codes
    public static void printHuffmanCodes(Map<Character, String> huffmanCodes) {
        for (Map.Entry<Character, String> entry : huffmanCodes.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }

    public static void main(String[] args) {
//        String text = "this is an example for huffman encoding";
        String text = "apple";
        Map<Character, String> huffmanCodes = generateHuffmanCodes(text);

        System.out.println("Huffman Codes: ");
        printHuffmanCodes(huffmanCodes);

        String encodedText = encode(text, huffmanCodes);
        System.out.println("\nEncoded Text: " + encodedText);
    }
}