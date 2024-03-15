import UIKit
import React
import Foundation

class SecondViewController: UIViewController {
    var txStatus: String?
    @IBOutlet weak var txField: UITextField!

    override func viewDidLoad() {
        super.viewDidLoad()
        txField.text = txStatus
    }
    @IBAction func btnBackToReactScreen(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
}

