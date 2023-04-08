#include <string>
int main() {
    system("git add .");
    system("git commit -m \"autoupdate\"");
    system("git push origin main");
    return 0;
}