#include <fstream>
#include <iostream>
#include <regex>
#include <string>
int main() {
    // create object
    std::string input;
    std::cout << "Enter deck link" << std::endl;
    std::cin >> input;
    std::string url = input.erase(0, 18);
    std::string ogname = input.erase(0, input.find("_F2P%20") + 7);
    std::string archetype = std::regex_replace(ogname, std::regex("%20"), " ");
    time_t now = time(0);
    tm *ltm = localtime(&now);
    char buffer[80];
    strftime(buffer, 80, "%b %d, %Y", ltm);
    std::cout << "archetype: " << archetype << std::endl;
    std::cout << "user: DLF2P" << std::endl;
    std::cout << "url: " << url << std::endl;
    std::cout << "date: " << buffer << std::endl;
    std::string obj = "  {\n    archetype: \"" + archetype + "\",\n    user: \"DLF2P\",\n    url: \"" + url + "\",\n    date: \"" + buffer + "\",\n  },\n";

    // edit file
    std::ifstream inputFile("lib/f2pdeckdb.js");
    if (!inputFile.is_open()) {
        std::cout << "Error opening input file!" << std::endl;
        return 1;
    }
    std::ofstream outputFile("lib/tempf2pdeckdb.js");
    if (!outputFile.is_open()) {
        std::cout << "Error opening output file!" << std::endl;
        return 1;
    }
    std::string line;
    while (getline(inputFile, line)) {
        size_t pos = line.find("]");
        if (pos != std::string::npos) {
            line.insert(pos, obj);
        }
        outputFile << line << std::endl;
    }
    inputFile.close();
    outputFile.close();
    remove("lib/f2pdeckdb.js");
    rename("lib/tempf2pdeckdb.js", "lib/f2pdeckdb.js");

    // upload
    std::string confirm;
    std::cout << "Confirm upload? [y/n]" << std::endl;
    std::cin >> confirm;
    if (confirm == "y") {
        system("git add .");
        system("git commit -m \"autoupdate\"");
        system("git push origin main");
    }
    return 0;
}