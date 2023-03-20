import Foundation
import AVKit

@objc(PipIOS)
class PipIOS: NSObject, RCTBridgeModule {
  
  @objc func enterPipMode() {
    guard let videoViewController = UIApplication.shared.windows.first?.rootViewController as? AVPlayerViewController,
          videoViewController.player != nil else {
      return
    }
    
    if videoViewController.player?.currentItem?.presentationSize == CGSize.zero {
      videoViewController.player?.currentItem?.preferredPeakBitRate = 1000000
    }
    
    videoViewController.allowsPictureInPicturePlayback = true
    
    DispatchQueue.main.async {
      videoViewController.player?.play()
    }
  }
}