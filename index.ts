import { Publisher, PublishContext, UploadTask } from "electron-publish/out/publisher";

class NucleusPublisher extends Publisher {
  protected readonly context: PublishContext;
  providerName = 'Nucleus';

  constructor(context: PublishContext) {
    super(context);
    this.context = context;
  }

  async upload(task: UploadTask) {
    // this.createProgressBar();
    console.trace(task);
    // return new Promise ((resolve, reject) => {
    //   resolve("done");
    //   reject(new Error("…"));
    // });
  }

  toString(): string {
    return 'Not Implemented';
  };
}
  
export default NucleusPublisher;
